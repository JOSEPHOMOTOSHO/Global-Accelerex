import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Helpers } from '../helpers/utility.helpers';
import { Response } from '../interfaces/response.interface';
import { CreateComment } from '../dtos/comment.dto';
import { CommentService } from '../services/comment.service';

@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentService: CommentService,
      ) { }
    @Post("/:episodeId")
    async createComment(@Body() payload:CreateComment, @Param('episodeId') episodeId:string):Promise<Response>{
        const comment = await this.commentService.addComment(payload,episodeId)
        return Helpers.sendJsonResponse( comment ,'Comment has beeen created')
    }

    @Get()
    async getAllComments():Promise<Response>{
        const comments = await this.commentService.getAllComments()
        return Helpers.sendJsonResponse( comments ,'Comments have beeen retrieved')
    }
}
