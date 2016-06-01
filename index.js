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
  return titleString.replace(/ +/, ' ')
}

console.log('# reading-list')
console.log('Papers I am reading\n')

const folders = fs.readdirSync('./bibs').filter(f => f !== '.DS_Store')
folders.reverse().forEach(folder => {
  console.log('\n##', folder.replace(/^[0-9]+ /, ''), '\n')
  const bibs = fs.readdirSync(path.join('./bibs/', folder)).filter(f => f !== '.DS_Store')
  bibs.forEach(bib => {
    let obj = parse(fs.readFileSync(path.join('./bibs/', folder, bib), 'utf8'))[0]
    console.log('- ', `**${formatTitle(obj.entryTags.title)}**, ${obj.entryTags.year}`)
    console.log(`  ${formatAuthors(obj.entryTags.author)}`)
  })
})

