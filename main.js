function placar(player1, player2)
{
  alert (player1, player2)
}

function createGame(player1, hour, player2, placar1, placar2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"  onclick="placar(${player1}, ${player2}) ${placar1}, ${placar2}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}"  onclick="placar(${player2}, ${player1}) ${placar2}, ${placar1}"> 
  </li>
  `
}


let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return ` 
  <div class="card" style="animation-delay: ${delay}s" >
      <h2>${date} <span>${day}</span> </h2>
      <ul>
       ${games} 
      </ul>
    </div>
  `
}


document.querySelector('#cards').innerHTML =
 
    createCard("20/11/2022", "Domingo",
      createGame('catar', '13:00', 'equador', 'Catar-0', 'Equador-2')
    ) +
    createCard("21/11/2022", "segunda",
      createGame('inglaterra', '10:00', 'ira', 'Inglaterra-6', 'Irã-2') +
      createGame('senegal', '13:00', 'holanda', 'Senegal-0', 'Holanda-2') +
      createGame('estados-unidos', '16:00', 'gales', 'EUA-1', 'Gales-1')
    ) +
    createCard("22/11/2022", "Terça",
      createGame('argentina', '07:00', 'arabia-saudita', 'Argentina-1', 'Arábia Saudita-2') +
      createGame('dinamarca', '10:00', 'tunisia', 'Dinamarca-0', 'Tunísia-0') +
      createGame('mexico', '13:00', 'polonia', 'México-0', 'Polônia-0') +
      createGame('franca', '16:00', 'australia', 'França-4', 'Austrália-1')   
      ) +
    createCard("23/11/2022", "Quarta",
      createGame('marrocos', '07:00', 'croacia', 'Marrocos-0', 'Croácoia-0') +
      createGame('alemanha', '10:00', 'japao', 'Alemanha-1', 'Japão-2') +
      createGame('espanha', '13:00', 'costa-rica', 'Espanha-7', 'Costa Rica-0') +
      createGame('belgica', '16:00', 'canada', 'Bélgica-1', 'Canadá-0')
    ) +
    createCard("24/11/2022", "Quinta",
      createGame('suica', '07:00', 'camaroes', 'Suíça-1', 'Camarões-0') +
      createGame('uruguai', '10:00', 'coreia-do-sul', 'Uruguai-0', 'Coréia do Sul-0') +
      createGame('portugal', '13:00', 'gana', 'Portugal-3', 'Gana-2') +
      createGame('brasil', '16:00', 'servia', 'Brasil-2', 'Sérvia-0')
    ) +
    createCard("25/11/2022", "Sexta",
      createGame('gales', '07:00', 'ira', 'Gales-0', 'Irã-2') +
      createGame('catar', '10:00', 'senegal', 'Catar-1', 'Senegal-3') +
      createGame('holanda', '13:00', 'equador', 'Holanda-1', 'Equador-1') +
      createGame('inglaterra', '16:00', 'estados-unidos', 'Inglaterra-0', 'EUA-0') 
    ) +
    createCard("26/11/2022", "Sábado",
      createGame('tunisia', '07:00', 'australia', 'Tunísia-0', 'Austrália-1') +
      createGame('polonia', '10:00', 'arabia-saudita', 'Polônia-2', 'Arábia Saudita-0') +
      createGame('franca', '13:00', 'dinamarca', 'França-2', 'Dinamarca-1') +
      createGame('argentina', '16:00', 'mexico', 'Argentina-2', 'México-0') 
    ) +
    createCard("27/11/2022", "Domingo",
      createGame('japao', '07:00', 'costa-rica', 'Japão-0', 'Costa Rica-1') +
      createGame('belgica', '10:00', 'marrocos', 'Bélgica-0', 'Marrocos-2') +
      createGame('croacia', '13:00', 'canada', 'Croácia-4', 'Canadá-1') +
      createGame('espanha', '16:00', 'alemanha', 'Espanha-0', 'Alemanha-0') 
    ) +
    createCard("28/11/2022", "Segunda",
      createGame('camaroes', '07:00', 'servia', 'Camarões-3', 'Sérvia-3') +
      createGame('coreia-do-sul', '10:00', 'gana', 'Coréia do Sul-2', 'Gana-3') +
      createGame('brasil', '13:00', 'suica', 'Brasil-1', 'Suíça-0') +
      createGame('portugal', '16:00', 'uruguai', 'Portugal-2', 'Uruguai-0') 
    ) +
    createCard("29/11/2022", "Terça",
      createGame('holanda', '12:00', 'catar', 'Holanda-2', 'Catar-0') +
      createGame('equador', '12:00', 'senegal', 'Equador-1', 'Senegal-2') +
      createGame('gales', '16:00', 'inglaterra', 'Gales-0', 'Inglaterra-3') +
      createGame('ira', '16:00', 'estados-unidos', 'Irã-0', 'EUA-1') 
    ) +
    createCard("30/11/2022", "Quarta",
      createGame('tunisia', '12:00', 'franca', 'Tunísia-1', 'França-0') +
      createGame('australia', '12:00', 'dinamarca', 'Austrália-1', 'Dinamarca-0') +
      createGame('polonia', '16:00', 'argentina', 'Polônia-0', 'Argentina-2') +
      createGame('arabia-saudita', '16:00', 'mexico', 'Arábia Saudita-1', 'México-2') 
    ) +
    createCard("01/12/2022", "Quinta",
      createGame('croacia', '12:00', 'belgica', 'Croácia-0', 'Bélgica-0') +
      createGame('canada', '12:00', 'marrocos', 'Canadá-1', 'Marrocos-2') +
      createGame('japao', '16:00', 'espanha', 'Japão-2', 'Espanha-1') +
      createGame('costa-rica', '16:00', 'alemanha', 'Costa Rica-2', 'Alemanha-4') 
    ) +
    createCard("02/12/2022", "Sexta",
      createGame('Gana', '12:00', 'uruguai', 'Gana-0', 'Uruguai-2') +
      createGame('coreia-do-sul', '12:00', 'portugal', 'Coréia do Sul-2', 'Portugal-1') +
      createGame('servia', '16:00', 'suica', 'Sérvia-2', 'Suíça-3') +
      createGame('camaroes', '16:00', 'brasil', 'Camarões-1', 'Brasil-0') 
    ) +
    createCard("03/12/2022", "Sábado",
      createGame('holanda', '12:00', 'estados-unidos', 'Holanda-3', 'EUA-1') +
      createGame('argentina', '16:00', 'australia', 'Argentina-2', 'Austrália-1') 
    ) +
    createCard("04/12/2022", "Domingo",
      createGame('franca', '12:00', 'polonia', 'França-3', 'Polônia-1') +
      createGame('inglaterra', '16:00', 'senegal', 'Inglaterra-3', 'Senegal-0') 
    ) +
    createCard("05/12/2022", "Segunda",
      createGame('japao', '12:00', 'croacia', 'Japão-2 (1)P', 'Croácia-4 (1)P') +
      createGame('brasil', '16:00', 'coreia-do-sul', 'Brasil-4', 'Coréria do Sul-1') 
    ) +
    createCard("06/12/2022", "Terça",
      createGame('marrocos', '12:00', 'espanha', 'Marrocos-3 (0)P', 'Espanha-0(0)P') +
      createGame('portugal', '16:00', 'suica', 'Portugal-6', 'Suiça-1') 
    ) +
    createCard("09/12/2022", "Sexta",
      createGame('croacia', '12:00', 'brasil', 'Croácia-5 (1)P', 'Brasil-3(1)P') +
      createGame('holanda', '16:00', 'argentina', 'Holanda-5 (2)P', 'Argentina-6 (2)P') 
    ) +
    createCard("10/12/2022", "Sábado",
      createGame('marrocos', '12:00', 'portugal', 'Marrocos-1', 'Portugal-0') +
      createGame('inglaterra', '16:00', 'franca', 'Inglaterra-1', 'França-2') 
    ) +
    createCard("13/12/2022", "Terça",
    createGame('argentina', '16:00', 'croacia', 'Argentina-3', 'Croácia-0') +
    createGame('franca', '16:00', 'marrocos', 'França-2', 'Marrocos-0') 
    ) +
    createCard("17/12/2022", "3º lugar",
    createGame('croacia', '12:00', 'marrocos', 'Croácia-', 'Marrocos-') 
    ) +
    createCard("18/12/2022", "Final",
    createGame('argentina', '12:00', 'franca', 'Argentina-', 'França-')
    )
    
