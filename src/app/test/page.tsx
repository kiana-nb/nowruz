import VoicePlayer from '@/components/voice-player'
import VoiceRecorder from '@/components/voice-recorder'
import React from 'react'

export default function page() {
  return (
    <div className='flex gap-4 flex-col h-dvh w-full justify-center items-center'>
        <VoicePlayer/>
        <VoiceRecorder/>
    </div>
  )
}
