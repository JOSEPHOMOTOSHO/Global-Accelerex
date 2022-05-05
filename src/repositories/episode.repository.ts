import { RepositoryException } from "../custom-exceptions/repository.exceptions";
import { EntityRepository, Repository } from "typeorm";
import { Episode } from "../entities/episode.entity";
import { CreateEpisode } from "../dtos/episode.dto";


@EntityRepository(Episode)
export class EpisodeRepository extends Repository<Episode>{
    async addEpisode(payload:CreateEpisode){
        const episode:CreateEpisode = {
            name:payload.name,
            episodeCode:payload.episodeCode,
            releaseDate:payload.releaseDate,
            episodeComments:payload.episodeComments,
            characters:payload.characters          
        }
        try {
            const createdEpisode = this.create(episode)
            await this.save(createdEpisode)
            return createdEpisode
        } catch (err) {
            throw new RepositoryException(`Error saving Episode. ${err.message}`);
        }
    }

    async getAllEpisodes(){
        try{

            const episodes = await this.find({
                relations:['episodeComments'],
                order:{
                    releaseDate:'DESC'
                }
            })
    
            const episodesWithCommentCount =  episodes.map((episode)=>{
                return {
                    ...episode,commentCount:episode.episodeComments.length
                }
            })

            return episodesWithCommentCount
        }catch(err){
            throw new RepositoryException(`Error getting Episode. ${err.message}`);
        }
    }
}