import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from '../services/comment.service';
import { CreateComment } from '../dtos/comment.dto';


class commentServiceMock{
  addComment(payload:CreateComment, id:string){
    return {}
  }

  getAllComments(){
    return []
  }
}

describe.only('CommentService', () => {
  let commentService: CommentService;

  const mockCommentServiceProvider = {
    provide:CommentService,
    useClass:commentServiceMock
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentService,mockCommentServiceProvider],
    }).compile();

    commentService = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(commentService).toBeDefined();
  });

  it('should call the addComment method with the required params', async () => {
    const commentSpy = jest.spyOn(commentService, "addComment")
    const createCommentDto = new CreateComment()
    const commentId = "commentId"
    commentService.addComment(createCommentDto, commentId )
    expect(commentSpy).toHaveBeenCalledWith(createCommentDto,commentId)
  });

  it('should call the getAllComments method', async () => {
    const commentSpy = jest.spyOn(commentService, "getAllComments")
    commentService.getAllComments( )
    expect(commentSpy).toHaveBeenCalled()
  });
});
