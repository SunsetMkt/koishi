import { App, Command, Context, User, Channel, Session } from 'koishi'
import {} from '@koishijs/plugin-adapter-discord'
import {} from '@koishijs/plugin-adapter-onebot'
import {} from '@koishijs/plugin-adapter-telegram'
import {} from '@koishijs/plugin-console'
import {} from '@koishijs/plugin-rate-limit'
import { Schedule } from '@koishijs/plugin-schedule'
import {} from '@koishijs/plugin-teach'

declare global {
  // utils
  type Dict<T = any> = import('koishi').Dict<T>
  type Awaitable<T> = import('koishi').Awaitable<T>
  type segment = import('koishi').segment
  type Schema<S = any, T = S> = import('koishi').Schema<S, T>

  const segment: typeof import('koishi').segment
  const Time: typeof import('koishi').Time

  // core
  type Argv = import('koishi').Argv
  type Disposable = import('koishi').Disposable
  type Service = import('koishi').Service

  const app: App
  const ctx: Context
  const cmd: Command
  const user: User
  const channel: Channel
  const session: Session<User.Field, Channel.Field>

  // convention
  const content: string
}

// ---cut---
