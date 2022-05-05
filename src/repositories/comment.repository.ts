import { RepositoryException } from "../custom-exceptions/repository.exceptions";
import { EntityRepository, Repository } from "typeorm";
import { Comment } from "../entities/comment.entity";
import { CreateComment } from "../dtos/comment.dto";


@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment>{
    async addComment(payload:CreateComment){
        const comment:CreateComment= {
          comment:payload.comment,
          episode:payload.episode,
          ipAddressLocation:payload.ipAddressLocation
        }
        try {
            const createdComment = this.create(comment)
            await this.save(createdComment)
            return createdComment
        } catch (err) {
            throw new RepositoryException(`Error saving Comment. ${err.message}`);
 
        }
    }

    async getAllComments(){
        let comments = await this.find({
            order:{
                created:'DESC'
            }
        })

        return comments
    }
}