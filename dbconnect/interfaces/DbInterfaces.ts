interface GeneralServerResponse {
    response: {
        code: string, 
        err: boolean, 
        msg: string,
        object?: string
    }
}

interface GeneralResponse {
    err: boolean,
    serverResponse?: GeneralServerResponse,
    serverMsg: string
}

interface ChatConnectDb {
    name: string,
    password: string,
    chats?: object,
    userId: string,
    when_created: string,
    when_created_id: string
}

interface UserConnectDb {
    name: string,
    lastname: string,
    email: string,
    password: string,
    when_register: string
}

export type {
    GeneralResponse,
    GeneralServerResponse,
    UserConnectDb,
    ChatConnectDb
}