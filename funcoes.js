function somaPontos(vitorias, derrotas) {
    let pontos = vitorias - derrotas
    return pontos
}

function verificaPatente(pontos) {

    if (pontos < 10) {
        return "FERRO"
    } else if (pontos > 10 && pontos <= 20) {
        return "BRONZE"
    } else if (pontos > 20 && pontos <= 50) {
        return "PRATA"
    } else if (pontos > 50 && pontos <= 80) {
        return "OURO"
    } else if (pontos > 80 && pontos <= 90) {
        return "DIAMANTE"
    } else if (pontos > 90 && pontos <= 100) {
        return "LENDARIO"
    } else if (pontos >= 101) {
        return "IMORTAL"
    }
}

module.exports = {
    somaPontos,
    verificaPatente
}