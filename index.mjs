#!/usr/bin/env node
import { getMembersOfOrganization, getUserInfo } from './modules/GitHub.mjs'




getMembersOfOrganization('bancodobrasil').then((members) => {
  return members.map(({login}) => ({login}))
}).then((ids) => {

  ids.forEach((id) => {
    getUserInfo(id).then((user) => {
      console.log(user)
    }).catch((e) => {
      console.error(e)
    })
  })

}).catch((e) => { 
  console.error(e) 
});
