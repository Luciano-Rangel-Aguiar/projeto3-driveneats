function queroP(card) {
  const cardClicado = document.querySelector('.selecionadoP')
  if (cardClicado !== null) {
    document.querySelector('.selecionadoP .t2').classList.remove('pratoN')
    document.querySelector('.selecionadoP .t4').classList.remove('pratoP')
    cardClicado.classList.remove('selecionadoP')
  }

  card.classList.add('selecionadoP')
  document.querySelector('.selecionadoP .t2').classList.add('pratoN')
  document.querySelector('.selecionadoP .t4').classList.add('pratoP')
  finalizar()
}
function queroB(card) {
  const cardClicado = document.querySelector('.selecionadoB')
  if (cardClicado !== null) {
    document.querySelector('.selecionadoB .t2').classList.remove('bebidaN')
    document.querySelector('.selecionadoB .t4').classList.remove('bebidaP')
    cardClicado.classList.remove('selecionadoB')
  }

  card.classList.add('selecionadoB')
  document.querySelector('.selecionadoB .t2').classList.add('bebidaN')
  document.querySelector('.selecionadoB .t4').classList.add('bebidaP')
  finalizar()
}
function queroS(card) {
  const cardClicado = document.querySelector('.selecionadoS')
  if (cardClicado !== null) {
    document.querySelector('.selecionadoS .t2').classList.remove('sobremesaN')
    document.querySelector('.selecionadoS .t4').classList.remove('sobremesaP')
    cardClicado.classList.remove('selecionadoS')
  }

  card.classList.add('selecionadoS')
  document.querySelector('.selecionadoS .t2').classList.add('sobremesaN')
  document.querySelector('.selecionadoS .t4').classList.add('sobremesaP')
  finalizar()
}
function finalizar() {
  const cardClicado1 = document.querySelector('.selecionadoS')
  const cardClicado2 = document.querySelector('.selecionadoB')
  const cardClicado3 = document.querySelector('.selecionadoP')

  if (cardClicado1 !== null && cardClicado2 !== null && cardClicado3 !== null) {
    const botao1 = document.querySelector('.botao1')
    const botao2 = document.querySelector('.botao2')
    botao1.classList.add('hidden')
    botao2.classList.remove('hidden')
  }
}
function soma() {
  const pratoP = document.querySelector('.pratoP').innerHTML.replace('R$', '')
  const bebidaP = document.querySelector('.bebidaP').innerHTML.replace('R$', '')
  const sobremesaP = document
    .querySelector('.sobremesaP')
    .innerHTML.replace('R$', '')

  let total = 0
  const precos = [pratoP, bebidaP, sobremesaP]

  for (let i = 0; i < precos.length; i++) {
    total += Number(precos[i].replace(',', '.'))
  }
  return total.toFixed(2)
}
function mensagem() {
  const pratoN = document.querySelector('.pratoN').innerHTML
  const bebidaN = document.querySelector('.bebidaN').innerHTML
  const sobremesaN = document.querySelector('.sobremesaN').innerHTML
  const mensagemString = `
  Olá, gostaria de fazer o pedido:
  - Prato: ${pratoN}
  - Bebida: ${bebidaN}
  - Sobremesa: ${sobremesaN}
  Total: R$ ${soma()}`

  const whatappLink = `https://wa.me/5522997361150?text=${encodeURIComponent(
    mensagemString
  )}`

  window.open(whatappLink)
}
