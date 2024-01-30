
describe("New chat work fine", () => {
    it("Chat not work if inputs are empty", () => {
        cy.visit("http://localhost:3000/")
        cy.get("#email").type("pruebamail@pruebamail.com")
        cy.get("#password").type("pruebaprueba")
        cy.get("#loginform").submit()

        cy.contains("Comenzar chat").click()
        cy.contains("Rellene todos los campos")
    })

    it("New chat work fine", () => {
        cy.visit("http://localhost:3000/")
        cy.get("#email").type("pruebamail@pruebamail.com")
        cy.get("#password").type("pruebaprueba")
        cy.get("#loginform").submit()

        cy.get("#chatname").type("Nuevo chat")
        cy.get("#chatpassword").type("asdasd23423rsdfa")
        cy.get("#chatconversation").type("Hola, te envio un mensaje de bienvenida")
        cy.contains("Comenzar chat").click()
        cy.contains("Chat creado correctamente")
    })

    it("New chat work fine", () => {
        cy.visit("http://localhost:3000/")
        cy.get("#email").type("pruebamail@pruebamail.com")
        cy.get("#password").type("pruebaprueba")
        cy.get("#loginform").submit()

        cy.contains("Todos los chats").click()
        cy.get("#deletechat").click()
        cy.get("#label1").click()
    })
})