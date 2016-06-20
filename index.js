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

console.log('# reading-list')
console.log('Papers I am reading\n')
console.log('Suggest me a paper by [opening an issue](https://github.com/nicola/reading-list/issues/new)\n')

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
      console.log('- ', `${separator}${formatTitle(obj.entryTags.title)}${separator}, ` + (relevant ? formatAuthors(obj.entryTags.author) : '') + `${obj.entryTags.year}`)
    })
})
