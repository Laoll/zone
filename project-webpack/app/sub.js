/**
 * Created by Administrator on 2017/5/25.
 */
function generateText() {
   var element = document.createElement('h2')
   element.innerHTML = 'hello h3 world';
   return element
}
function alertText() {
  return  console.log("a");
}

// module.exports = generateText;
module.exports = {
  generateText :generateText(),
  alertText : alertText()
};