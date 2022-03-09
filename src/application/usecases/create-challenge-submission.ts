import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  constructor (
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository
  ) {}

  async execute ({studentId, challengeId}: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId)
    const challenge = await this.challengesRepository.findById(challengeId)

    if (!student) {
      throw new Error('Missing the student id.')
    }

    if (!challenge) {
      throw new Error('Missing the challenge id.')
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    })

    return submission
  }
}