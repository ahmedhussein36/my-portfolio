import { Project } from '@/types/project'

export default function Challenges({ project }: { project: Project }) {
  return (
    <section className="mb-8">
      <h2 className="project-title text-2xl font-semibold mb-4">Challenges</h2>
      <ul className="list-disc pl-5">
        {project.showcase.challenges.map((challenge, index) => (
          <li key={index}
          className=' p-2'
          >{challenge}</li>
        ))}
      </ul>
    </section>
  )
}

