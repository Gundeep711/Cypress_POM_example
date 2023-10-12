export class Vitality{

    Vitality(ln) {
        let lang = ln
        let url = "https://richmediawireless.com/dev/manulife/vitality/"+lang

        this.visit(url,lang)
    }

    visit(link,lng) {
        cy.viewport('macbook-13')
        if(lng !== 'en' && lng !== 'fr'){
            cy.log("INCORRECT SELECTION!!! ",lng)
        }
        cy.visit(link, {
            auth: {
                username: '',
                password: ''
            },
        })
    }

}

