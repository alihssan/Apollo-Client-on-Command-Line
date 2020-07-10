import 'dotenv/config';
import ApolloClient,{gql} from 'apollo-boost'
import 'cross-fetch/polyfill'


const client=new ApolloClient({
	uri:'https://api.github.com/graphql',
	request:operation=>{
		operation.setContext({
			headers:{
				authorization:`Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
			}
		})
	}
})

const get_organization=gql `
	{
			organization(login: "the-road-to-learn-react"){
				name
				url
			}
	}


`

client
	.query({query:get_organization})
	.then(console.log)

