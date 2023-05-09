const PLAY_LIST_ID = "PL7SO_m02NcxaBTSjvcH6otlqvZIsyxKSG"
const URL_DATA_BASE =
	"https://api.github.com/repos/victorvitori/chicastelegram/contents/dtBs.json"
//const TOKEN_DATA_BASE = ""
const MENSAJE_LISTA_LLENA = "...👀..." //


const CONST = {
	playListId: PLAY_LIST_ID,
	dataBase: {
		url: URL_DATA_BASE,
		token: TOKEN_DATA_BASE,
		sha: SHA_DATA_BASE
	},
	messages: {
		fullList: MENSAJE_LISTA_LLENA,
	},
}

module.exports = { CONST }
