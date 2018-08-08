import {
  MemoryCard,
}                 from 'memory-card'

import {
  log,
}                 from './config'

export let memory: MemoryCard

export function getMemory (name: string): MemoryCard {
  log.verbose('getMemory', 'getMemory(%s)', name)

  if (memory) {
    return memory
  }

  const S3_ACCESS_KEY_ID     = process.env.S3_ACCESS_KEY_ID as string
  const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY as string
  const S3_REGION            = process.env.S3_REGION as string
  const S3_BUCKET            = process.env.S3_BUCKET as string

  if (  S3_ACCESS_KEY_ID
    &&  S3_BUCKET
    &&  S3_REGION
    &&  S3_SECRET_ACCESS_KEY
  ) {
    log.verbose('getMemory', 'getMemory() creating new s3 memory')

    memory = new MemoryCard({
      name,
      storageOptions: {
        accessKeyId     : S3_ACCESS_KEY_ID,
        bucket          : S3_BUCKET,
        region          : S3_REGION,
        secretAccessKey : S3_SECRET_ACCESS_KEY,
        type            : 's3',
      }
    })
  } else {
    log.verbose('getMemory', 'getMemory() creating new file memory')
    memory = new MemoryCard({ name })
  }

  return memory
}
