declare interface Window {
	connector: 			IConnector
	ethereum: 			any
	ethers: 			any
	soljsonReleases: 	any
	PR: 				any
}

declare interface RpcRequestType {
	jsonrpc: 		"2.0"
	method: 		string
	params: 		Array<any>
	id: 			string|number
}

declare interface RpcResponseType {
	jsonrpc: 		"2.0"
	id: 			string|number
	result?: 		any
	error?: 		number
}

declare interface ServerResponse {
	result?:    		any
	error?:     		number
}