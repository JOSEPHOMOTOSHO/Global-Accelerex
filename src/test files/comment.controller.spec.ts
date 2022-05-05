import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from '../services/comment.service';
import { CommentController } from '../controllers/comment.controller';
import { CreateComment } from '../dtos/comment.dto';

describe('CommentController', () => {
  let commentController: CommentController;
  let mockService: CommentService

  const commentResponse = {
      comment: "There are actually male and female actors in this episode...o wow",
      ipAddressLocation: "292.133.41.17",
      episode: {
          id: 3,
          name: "episode 2",
          releaseDate: "2022-02-01T00:00:00.000Z",
          episodeCode: "Two Two",
          created: "2022-05-03T17:30:08.990Z"
      },
      id: 5,
      created: "2022-05-05T00:59:27.964Z"
  }

  const getAllCommentsResponse = {
      id: 2,
      comment: "Who goes there again part 22 hahahaha",
      ipAddressLocation: "222.122.41.17",
      created: "2022-05-03T16:58:19.977Z"
  }

  beforeEach(async () => {
    const mockCommentService = {
      provide: CommentService,
      useFactory : () => ({
        addComment: jest.fn().mockResolvedValue(commentResponse),
        getAllComments: jest.fn().mockResolvedValue([getAllCommentsResponse])
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers:[CommentService,mockCommentService]
    }).compile();

    commentController = module.get<CommentController>(CommentController);
    mockService = module.get<CommentService>(CommentService)
  });

  it('should be defined', () => {
    expect(commentController).toBeDefined();
  });

  it('should call createComment Method', async() => {
    let createCommentDto = new CreateComment()
    let id = '1'
    const createdComment = await commentController.createComment(createCommentDto, id)
    expect(mockService.addComment).toHaveBeenCalled()
    expect(mockService.addComment).toHaveBeenCalledWith(createCommentDto,id)
    expect(createdComment.data).toEqual(commentResponse)
  });

  it('should call getAllComments Method', async() => {
    const gottenComments = await commentController.getAllComments()
    expect(mockService.getAllComments).toHaveBeenCalled()
    expect(gottenComments.data[0]).toEqual(getAllCommentsResponse)
  });
});
