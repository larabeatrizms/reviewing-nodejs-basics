// Buffer é uma representação de memória no computador
// Maneira otimizada de ler e salvar da memória
// Criada para o javascript lidar com dados binários

const buf = Buffer.from('ok')

console.log(buf) // <Buffer 6f 6b> // Hexadecimal
console.log(buf.toJSON()) // { type: 'Buffer', data: [ 111, 107 ] } // Decimal

