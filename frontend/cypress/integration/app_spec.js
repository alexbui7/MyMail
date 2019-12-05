describe("MyMail quickstart app", () => {
    const lead = {
        name: "Manh",
        email: "mailmejob@jobless.com",
        message: "I'm poor help"
    };

    before(() => {
        cy.exec("npm run dev");
        cy.exec("npm run flush");
    });

    it("Fill web form", () => {
        cy.visit("/");

        cy.get('input[name="name")')
            .type(lead.name)
            .should("have.value", lead.name);

        cy .get('input[name="email"]')
            .type(lead.email)
            .should("have.value", lead.email);

        cy.get('textarea[name="message"]')
            .type(lead.message)
            .should("have.value", lead.message);

        cy.get("form").submit();
    })
});