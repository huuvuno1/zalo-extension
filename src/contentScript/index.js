// avatarConfigs = [{name; avatar}]
const avatarConfigs = JSON.parse(localStorage.getItem('avatarConfigs') || "[]")

avatarConfigs.push({
  name: "",
  avatar: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
})

async function listenChatView() {
  const container = document.getElementById('chatViewContainer');
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      console.log('change', mutation)
      if (mutation.type === 'childList' && mutation.target.id === "conversationListId") {
        setup()
      }
    }
  });

  // Cấu hình đối tượng MutationObserver
  const config = { childList: true, subtree: true };

  // Bắt đầu quan sát phần tử cha với cấu hình đã chỉ định
  observer.observe(container, config);
}


function setup() {
  setTimeout(() => {
    document.querySelectorAll('.msg-item').forEach(item => {
      item.querySelectorAll('img')?.forEach(i => i.src = avatarConfigs[0].avatar)
    })
    document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')?.addEventListener('click', () => {
      setTimeout(() => {
        listenChatView()
      })
    })
  }, 100)


  const container = document.getElementById('app');

  // Tạo một đối tượng MutationObserver
  const observer = new MutationObserver((mutationsList, observer) => {
      document.querySelectorAll('.msg-item').forEach(item => {
        item.querySelectorAll('img')?.forEach(i => i.src = avatarConfigs[0].avatar)
      })
      document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')?.addEventListener('click', () => {
        setTimeout(() => {
          listenChatView()
        })
      })
  });

  // Cấu hình đối tượng MutationObserver
  const config = { childList: true, subtree: true };

  // Bắt đầu quan sát phần tử cha với cấu hình đã chỉ định
  observer.observe(container, config);
}


const container = document.getElementById('app');

// Tạo một đối tượng MutationObserver
const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    console.log('change dome', mutation)
    if (mutation.type === 'childList' && mutation.target.id === "conversationListId") {
      setup()
    }
  }
});

// Cấu hình đối tượng MutationObserver
const config = { childList: true, subtree: true };

// Bắt đầu quan sát phần tử cha với cấu hình đã chỉ định
observer.observe(container, config);