// Webhook do Discord
const WEBHOOK_URL = "https://discord.com/api/webhooks/1351525407370776577/S-u-VUocXsO41_AkCgSoWENStqAIvxZ07Po49oGbJHD2VRz2MRqniE8BgKgF1fGTbBaI";

// Função para abrir o checkout
function openCheckout(item, price) {
    document.getElementById('selected-item').innerText = 'Produto: ' + item;
    document.getElementById('selected-price').innerText = 'Preço: R$ ' + price;
    document.getElementById('checkout').style.display = 'block';
}

// Função para processar o pagamento
function processPayment(method) {
    let item = document.getElementById('selected-item').innerText.replace('Produto: ', '');
    let price = document.getElementById('selected-price').innerText.replace('Preço: R$ ', '');
    let discordName = localStorage.getItem('discordName') || 'Não informado';
    let robloxName = localStorage.getItem('robloxName') || 'Não informado';

    let message = `💰 **Nova Compra** 💰\n\n🛒 **Item:** ${item}\n💵 **Preço:** R$ ${price}\n💳 **Método:** ${method}\n🆔 **Discord:** ${discordName}\n🎮 **Roblox:** ${robloxName}`;

    sendToDiscord(message);
    alert('Pagamento realizado com ' + method + '!');
}

// Função para salvar usuário registrado
function saveUserInfo() {
    let discordName = document.getElementById('discord-name').value;
    let robloxName = document.getElementById('roblox-name').value;

    if (!discordName || !robloxName) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    localStorage.setItem('discordName', discordName);
    localStorage.setItem('robloxName', robloxName);

    let message = `✅ **Novo Registro** ✅\n\n🆔 **Discord:** ${discordName}\n🎮 **Roblox:** ${robloxName}`;

    sendToDiscord(message);
    alert('Usuário registrado com sucesso!');
}

// Função para enviar os dados ao Discord via Webhook
function sendToDiscord(message) {
    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    }).catch(error => console.error("Erro ao enviar webhook:", error));
}

// Função para abrir/fechar o sidebar de registro
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}
