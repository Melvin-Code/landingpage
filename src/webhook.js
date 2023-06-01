import axios from "axios";
import QueryString from "qs";



export const lead = (data) => {
    const newLead = QueryString.stringify(data)

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://hooks.airtable.com/workflows/v1/genericWebhook/apprHxMOef5xd29Xp/wflq8vmFNNWSTlRuA/wtrqKJxEg6D4kMM01',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'brw=brwt0BXI6KXiX6nfU; AWSALB=F4gH2OGLzCKL5818oxW2TjCJyg5Ck49FXKn+Dvy4GPgJwABuCxjwiSeukLNOq5wwPCZWPKzpwEVJhHHIfKM0pz8Dt6fKFjTDifQR25UL6nBqwvWcB00lVf7a8hGs; AWSALBCORS=F4gH2OGLzCKL5818oxW2TjCJyg5Ck49FXKn+Dvy4GPgJwABuCxjwiSeukLNOq5wwPCZWPKzpwEVJhHHIfKM0pz8Dt6fKFjTDifQR25UL6nBqwvWcB00lVf7a8hGs'
        },
        data: newLead
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}
