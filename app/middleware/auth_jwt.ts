import  jwt  from "jsonwebtoken";

const SECRET= process.env.jwt_secret || 'secret11'
export default class AuthJwt{
    async handle({request,response},next){
        const authheader= await request.header('Authorization')
        const token= authheader.replace('Bearer','').trim()
        if(!token){
            return response.unauthorized({msj:'token obligatorio'})
        }else{
            try{
                const jwtcoded= jwt.verify(token,SECRET)
                request.updateBody({authUsuario:jwtcoded})
                await next()
            }catch(error){

                return response.unauthorized({msj:'token invalido'})
            }
        }
    }
}