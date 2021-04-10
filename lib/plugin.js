import Vue from 'vue'

const entryNamings = <%= JSON.stringify(options.entryMap) %>;
export default function () {
  Vue.prototype.$registerCustomElementsEntry = (name) => {
    if (process.client) {
      if (name in entryNamings){
        const filename = entryNamings[name]
        <% if (Object.keys(options.entryMap).length > 0) { %>return import('<%= options.entriesDir %>/' + `${filename}.client`)<% } %>
      } else {
        throw new Error(`Custom-Elements: Entry named "${name}" not found`)
      }
    } else {
      return Promise.resolve();
    }
  }
}
