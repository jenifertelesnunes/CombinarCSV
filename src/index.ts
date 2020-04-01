import fs from "fs"


(async ()=>{

    let caminho = `C:\\Users\\Arvvo\\WebstormProjects\\Scripts\\Excel\\Planilhas\\Relatorios\\Relatorios\\Participantes`
    function pastaToCSV(pathPasta) {
        // Ler o nome de todos os arquivos dentro da pasta ( csv )
        let arquivos = fs.readdirSync(pathPasta)

        function leArquivo(nome){
            let caminhoDoArquivo = pathPasta + "\\" + nome
            return fs.readFileSync(caminhoDoArquivo, "latin1" )
        }

        let conteudos = arquivos.map(leArquivo)

        function removerCabecalho(conteudoCsv) {
            let linhas = conteudoCsv.split("\n")
            return linhas.splice(1).join("\n")
        }

        let conteudosSemCabecalho = conteudos.map(removerCabecalho)

        let cabecalho = conteudos[0].split("\n")[0]

        let resultado = cabecalho + "\n" + conteudosSemCabecalho.join("\n")

        return resultado

    }


    let conteudoCsvGigante = pastaToCSV(caminho)

    let novocaminho = "C:\\Users\\Arvvo\\WebstormProjects\\Scripts\\Excel\\Planilhas\\Relatorios\\Relatorios\\Participantes"

    fs.writeFileSync(novocaminho + "\\" + "Total_Participantes", conteudoCsvGigante)


})();




