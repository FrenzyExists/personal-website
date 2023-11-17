import { octokit } from '~/types';


export default defineEventHandler(async (event) => {

  //http://localhost:3000/api/github
  try {
    const data = await octokit.request('GET /users/{username}/repos', {
      username: 'frenzyExists',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return {
      status: 200,
      data,
    }
  } catch (error) {
    status: error.status || 500,
      body: error.message,
    }
})

