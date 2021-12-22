import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  // for uuid v4
  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
