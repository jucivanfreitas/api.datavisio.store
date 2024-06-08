import { FastifyReply, FastifyInstance,FastifyPluginOptions,FastifyRequest } from "fastify";


export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/teste", async(Request:FastifyRequest, replay:FastifyReply)=>{
    return{ok:true}

  }
  )
}
