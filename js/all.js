const content = document.getElementById('content');
const time = document.getElementById('time');
const addedBtn = document.getElementById('addedBtn');
const deletedBtn = document.getElementById('deletedBtn');
const list = document.getElementById('list');

const listContent = []

function render() {
  let html5tr = ''
    listContent.forEach(function (item) {
      html5tr = html5tr + `
        <div class="item">
          <div>
            <p>${item.time} ${item.content}</p>
						<hr/>
          </div>
        </div>`
    })
    list.innerHTML = html5tr;
}

addedBtn.addEventListener('click' ,function () {
  
  listContent.push({
    content: content.value,
    time: time.value,
  })

  render();
})

deletedBtn.addEventListener('click',function () {
	listContent.shift()

  render();
})