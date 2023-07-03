const mysql = require('mysql');
const prompt = require('prompt-sync')();

let alfa_pro = '';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'clientes'
});

  let i = 1;
  while (true) {
    console.log('\nVocê deseja:\n\n(1) Criar um novo protocolo\n(2) Verificar protocolos existentes\n(3) Traduzir protocolos')
    let programa = prompt('(999) Finalizar o programa ');

    if (programa === '999') {
      console.log('Volte sempre!');
      break;
    } else if (programa === '2') {
      connection.query('SELECT * FROM protocol', (err, results) => {
        if (err) {
          console.error('Erro ao verificar protocolos existentes:', err);
          return;
        }
        console.log(results);
      });
    } else if (programa === '3'){

              const prompt = require('prompt-sync')();

        let resumo = prompt('Qual o protocolo que deseja conferir? ');
        let stringResumo = String(resumo).split('');
        let textoResumo = Array(10).fill('');

        for (j = 0; j < 10; j++) {
          switch (stringResumo[j]) {
            case '0':
              if (j === 3) {
                textoResumo[j] += 'Alarmes: Sem alarmes';
              }else if(j === 4){
                textoResumo[j] += 'Roteador: Sem acesso';
              }else if(j === 6){
                textoResumo[j] += 'Sinal ONU: Sem acesso';
              }else if(j === 8){
                textoResumo[j] += 'Login: Sem acesso';
              }else if(j === 9){
                textoResumo[j] += 'Senha: Sem acesso';
              }
            case '1':
              if (j === 0) {
                textoResumo[j] += 'Tipo: Fibra';
              } else if (j === 1) {
                textoResumo[j] += 'Empresa: Trip';
              } else if (j === 2) {
                textoResumo[j] += 'Prioridade: Residencial';
              } else if (j === 3) {
                textoResumo[j] += 'Alarmes: Link_Loss';
              } else if (j === 4) {
                textoResumo[j] += 'Roteador: Comodato';
              } else if (j === 5) {
                textoResumo[j] += 'Acesso: Tenho acesso ao roteador';
              } else if (j === 6) {
                textoResumo[j] += 'Sinal ONU: Ruim';
              } else if (j === 7) {
                textoResumo[j] += 'ONU em: Router';
              } else if (j === 8) {
                textoResumo[j] += 'Login: admin';
              } else if (j === 9) {
                textoResumo[j] += 'Senha: somente PPPoE';
              } else {
                textoResumo[j] += 'unknown';
              }
              break;
            case '2':
              if (j === 0) {
                textoResumo[j] += 'Tipo: Cabo';
              } else if (j === 1) {
                textoResumo[j] += 'Empresa: FBnet';
              } else if (j === 2) {
                textoResumo[j] += 'Prioridade: Empresarial';
              } else if (j === 3) {
                textoResumo[j] += 'Alarmes: Board_Aport';
              } else if (j === 4) {
                textoResumo[j] += 'Roteador: Próprio';
              } else if (j === 5) {
                textoResumo[j] += 'Acesso: Sem acesso ao roteador';
              } else if (j === 6) {
                textoResumo[j] += 'Sinal ONU: Preocupante';
              } else if (j === 7) {
                textoResumo[j] += 'ONU em: Bridge';
              } else if (j === 8) {
                textoResumo[j] += 'Login: User';
              } else if (j === 9) {
                textoResumo[j] += 'Senha: Fb@2PPPoE';
              } else {
                textoResumo[j] += 'unknown';
              }
              break;
            case '3':
              if (j === 0) {
                textoResumo[j] += 'Tipo: Rádio';
              } else if (j === 2) {
                textoResumo[j] += 'Prioridade: Dedicado';
              } else if (j === 3) {
                textoResumo[j] += 'Alarmes: Dying_Gasp';
              } else if (j === 6) {
                textoResumo[j] += 'Sinal ONU: Bom';
              } else if (j === 8) {
                textoResumo[j] += 'Login: Multipro\n';
              } else if (j === 9) {
                textoResumo[j] += 'Senha: *123FBmudar\n';
              } else {
                textoResumo[j] += 'unknown';
              }
              break;
            case '4':
              if (j === 3) {
                textoResumo[j] += 'Alarmes: Overtrash\n';
              } else {
                textoResumo[j] += 'unknown';
              }
              break;
            default:
              break;
          }
        }

        console.table(textoResumo);

    } else if (programa === '1') {
      let nome = prompt('Qual o nome completo da pessoa? ');

      let tipo_plano = prompt('1-Fibra  2-Cabo  3-Rádio ');
        switch(tipo_plano){
          case '1':
            alfa_pro += 'F'
          break;
          case '2':
            alfa_pro += 'C'
          break;
          case '3':
            alfa_pro += 'R'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      
      let tipo_trip = prompt('1-Trip  2-FBnet ');
        switch(tipo_trip){
          case '1':
            alfa_pro += 'Tp'
          break;
          case '2':
            alfa_pro += 'Fb'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      
      let tipo_preferencia = prompt('1-Residencial  2-Empresarial  3-Dedicado ');
        switch(tipo_preferencia){
          case '1':
            alfa_pro += 'R'
          break;
          case '2':
            alfa_pro += 'E'
          break;
          case '3':
            alfa_pro += 'D'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      
      let tipo_alarme = prompt('1-Link_Loss  2-Board_Aport  3-Dying_Gasp  4-Overtrash ');
        switch(tipo_alarme){
          case '0':
            alfa_pro += 'Sa'
          break;
          case '1':
            alfa_pro += 'll'
          break;
          case '2':
            alfa_pro += 'ba'
          break;
          case '3':
            alfa_pro += 'dg'
          break;
          case '4':
            alfa_pro += 'ot'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let tipo_rote = prompt('1-Comodato  2-Próprio ');
        switch(tipo_rote){
          case '0':
            alfa_pro += 'Sa'
          break;
          case '1':
            alfa_pro += 'Com'
          break;
          case '2':
            alfa_pro += 'Pro'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let tipo_roteA = prompt('1-Tenho acesso  2-Não tenho acesso ');
        switch(tipo_roteA){
          case '1':
            alfa_pro += 'Ta'
          break;
          case '2':
            alfa_pro += 'Sa'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let tipo_sinal = prompt('1-Ruim(-30dbm ^)  2-Preocupante(-27dbm)  3-Bom(-26dbm v) ');
        switch(tipo_sinal){
          case '0':
            alfa_pro += 'Sa'
          break;
          case '1':
            alfa_pro += 'R'
          break;
          case '2':
            alfa_pro += 'P'
          break;
          case '3':
            alfa_pro += 'B'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let tipo_aut = prompt('1-Router  2-Bridge ');
        switch(tipo_aut){
          case '1':
            alfa_pro += 'rtr'
          break;
          case '2':
            alfa_pro += 'brg'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let tipo_login = prompt('1-Admin  2-User  3-Multipro ');
        switch(tipo_login){
          case '0':
            alfa_pro += 'Sa'
          break;
          case '1':
            alfa_pro += 'A'
          break;
          case '2':
            alfa_pro += 'U'
          break;
          case '3':
            alfa_pro += 'M'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let tipo_login_senha = prompt ('1-PPPoE  2-Fb@2+PPPoE  3-*123FBmudar ')
        switch(tipo_login_senha){
          case '0':
            alfa_pro += 'Sa'
          break;
          case '1':
            alfa_pro += 'PP'
          break;
          case '2':
            alfa_pro += 'Fb'
          break;
          case '3':
            alfa_pro += '*1'
          break;
          default:
                console.log("Você digitou um número inválido, tente novamente.\n")
          break;
        }
      let observacao = prompt ("Observações:")
      let codigo = `${tipo_plano}${tipo_trip}${tipo_preferencia}${tipo_alarme}${tipo_rote}${tipo_roteA}${tipo_sinal}${tipo_aut}${tipo_login}${tipo_login_senha}`;
        
      let sql = 'INSERT INTO protocol (alfa_pro, codigo, nome, data_hora, observacao) VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?)';
      let values = [alfa_pro, codigo, nome, observacao];

      connection.query(sql, values, (err) => {
        if (err) {
          console.error('Erro ao inserir dados:', err);
          return;
        }
        console.log('Dados inseridos com sucesso!');
      });
    } else {
      console.log('Código inválido\n\n');
    }

    i++;
  }

  connection.end();
