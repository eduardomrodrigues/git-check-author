import  https from 'https';

export function getMembersOfOrganization(orgName) {

    let promise = new Promise((onSuccess, onFailure) => {

        let data = '';
        var options = {
            host: 'api.github.com',
            port: '443',
            method: 'GET',
            path: '/orgs/' + orgName + '/members',
            headers: {
                'User-Agent': 'git-check-authors'
            },
            json: true
        };
        const req = https.request(options, (res) => {

            if (res.statusCode !== 200) {
                return
            }

            res.on('data', (d) => {
                data += d
            });

            res.on('end', () => {
                onSuccess(JSON.parse(data));
            });
        });


        req.on('error', (e) => {
            onFailure(e)
        });
        req.end();
    })


    return promise

}



export function getUserInfo({login}){

    let promise = new Promise((onSuccess, onFailure) => {

        let data = '';
        var options = {
            host: 'api.github.com',
            port: '443',
            method: 'GET',
            path: '/users/' + login,
            headers: {
                'User-Agent': 'git-check-authors'
            },
            json: true
        };
        const req = https.request(options, (res) => {

            console.log(res.statusCode)

            if (res.statusCode !== 200) {
                return
            }

            res.on('data', (d) => {
                data += d
            });

            res.on('end', () => {
                onSuccess(JSON.parse(data));
            });
        });


        req.on('error', (e) => {
            onFailure(e)
        });
        req.end();
    })


    return promise

}