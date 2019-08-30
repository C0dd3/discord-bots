const jimp = require('jimp');

/** Utilizar código JIMP e inicializa-lo */

async function main() {
    /** 
     let avatar = await jimp.read('20180425_110702.jpg');
     * A imagem deve sempre ser um link de um local de arquivos.
    */

    
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK); // Fontes padrões dentro da documentação.
    let mask = await jimp.read('mascara.png'); // Mascara da imagem.
    let background = await jimp.read('Welcome.png'); // Fundo da imagem.
    

    /*
    avatar.resize(150, 150); // Reajustando imagem;
    mask.resize(150, 150); // Reajustando imagem;

    avatar.mask(mask); // Gera um mascara para uma imagem.

    background.print(fonte, 180, 175, 'Vicente Andrade'); // Criar um Texto em alguma imagem.

    background.composite(avatar, 20, 80).write('beta.png'); // Integra uma imagem a outra.
    */

    jimp.read('https://osegredo.com.br/wp-content/uploads/2018/02/pessoas-que-superam-a-depress%C3%A3o-830x450.jpg')
    .then(avatar => {
        avatar.resize(150, 150); 
        mask.resize(150, 150);
        avatar.mask(mask);
        background.print(fonte, 180, 175, 'Vicente Andrade');
        background.composite(avatar, 20, 80).write('beta.png'); 
    })
    .catch(err => {
        console.log(`Erro ao carregar imagem`);
    });
    
}


main();