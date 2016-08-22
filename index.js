const parse = require('bibtex-parse-js').toJSON
const fs = require('fs')
const path = require('path')

function formatAuthors (authorsString) {
  var authors = authorsString.split('and')

  if (authors.length > 3) {
    return (authors[0] + ' et al.').replace(/(\n|\t|\r)/, '').replace(/ +/, ' ')
  } else {
    return authorsString.replace(/(\n|\t|\r)/, '').replace(/ +/, '  ')
  }
}

function formatTitle (titleString) {
  return titleString.replace(/ +/, ' ').replace(/\{\}/, '*')
}

console.log("# [nicola](http://nicola.io)'s decentralized-research")
console.log('> This is the place where I take notes, write ideas and plan research and collaborate with others\n')
console.log('##### How to participate')
console.log('- [Suggest me a papers to read](https://github.com/nicola/reading-list/issues/new)')
console.log('- [Help me out figure out stuff](https://github.com/nicola/reading-list/issues)')
console.log('- [Read to my notes](https://github.com/nicola/reading-list/tree/master/notes)')
console.log('- [Ask any question](https://github.com/nicola/reading-list/issues/new)')
console.log('\n--\n')
console.log('# reading-list')

const folders = fs.readdirSync('./bibs').filter(f => f !== '.DS_Store')
folders.reverse().forEach(folder => {
  console.log('\n##', folder.replace(/^[0-9]+ /, ''), '\n')
  const bibs = fs.readdirSync(path.join('./bibs/', folder)).filter(f => f !== '.DS_Store')
  bibs
    .sort((a, b) => {
      let aRelevant = !!a.match(/relevant/)
      let bRelevant = !!b.match(/relevant/)
      if (aRelevant && !bRelevant) return -1
      if (bRelevant && !aRelevant) return 1
      return 0
    })
    .forEach(bib => {
      let obj = parse(fs.readFileSync(path.join('./bibs/', folder, bib), 'utf8'))[0]
      const relevant = !!bib.match(/relevant/)
      let separator = '*'
      if (relevant) {
        separator = '**'
      }
      console.log('- ', `${separator}${formatTitle(obj.entryTags.title)}${separator}, ` + (relevant ? `${formatAuthors(obj.entryTags.author)}, ` : '') + `${obj.entryTags.year}`)
    })
})
