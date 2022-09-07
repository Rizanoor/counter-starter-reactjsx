export const filterEmojis = ({ emojisData, searchText = "", maxResults = 20 }) => {

  const filterEmojis = emojisData.filter(emoji => {

    if (emoji.title.toLowerCase().includes(searchText.toLocaleLowerCase())) {
      return true
    }

    if (emoji.keywords.includes(searchText.toLocaleLowerCase())) {
      return true
    }

    return false
  })

  return filterEmojis.splice(0, maxResults)
}