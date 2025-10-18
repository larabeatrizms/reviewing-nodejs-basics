// Stream => Conseguir obter partes do dados sem ter que ler ele inteiro.

// Importação de clientes via CSV (Excel)
// Vantagem de ler grandes arquivos aos pouquinhos.
// Enquanto o arquivo está sendo enviado ao servidor ele consegue ser processado.

// Readable Stream / Writable Streams

// No Node toda porta de entrada e saída é uma stream
// Ex: Quando fazemos uma requisição HTTP para o Node podemos manter a conexão aberta.
// Stre

// process.stdin
//     .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)

    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        
        callback()
    }
}

new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())