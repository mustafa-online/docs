import { teams as members } from '@/data/teams'

function Member({ name, avatar, role, twitter, github }) {
  return (
    <li className="sm:py-8">
      <div className="flex items-start space-x-2 gap-6">
        <div className="relative flex-shrink-0 h-24 w-24">
          <img
            className="object-cover h-full w-full shadow-lg rounded-lg"
            src={avatar}
            alt={name}
          />
        </div>
        <div>
          <div className="space-y-4">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h4>{name}</h4>
              {role && <p className="text-blue-600">{role}</p>}
            </div>
            <ul className="flex space-x-5">
              {twitter && (
                <li>
                  <a
                    href={twitter}
                    className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              )}

              {github && (
                <li>
                  <a
                    href={github}
                    className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Teams({ status }) {
  return (
    <ul className="mt-8 list-none space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 lg:col-gap-8 lg:space-y-0">
      {members.map((member, k) => {
        if (status === member.status) {
          return <Member key={k} {...member} />
        }
      })}
    </ul>
  )
}
