import { Timeline } from "flowbite-react";
import React from 'react';
import { ImCheckmark, ImRedo2, ImTongue, ImWink } from "react-icons/im";
import Title from '../../Shared/Title';

function HowItworks() {
  return (
    <div className="max-w-7xl mx-auto">
      <Title heading={`How it Work's`} title={`MarriageBD simplifies the journey of finding your perfect life partner in just a few easy steps`} />
      <div className='my-10'>
      <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Create Your Profile</Timeline.Title>
          <Timeline.Time><ImCheckmark className="text-xl my-2 text-pink-500" /></Timeline.Time>
          <Timeline.Body>
          Sign up and create a detailed profile showcasing your background, preferences, and interests. This helps us find the most compatible matches for you.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Browse Compatible Matches</Timeline.Title>
          <Timeline.Time><ImTongue className="text-xl my-2 text-pink-500"/></Timeline.Time>
          <Timeline.Body>
          Explore a curated list of profiles tailored to your preferences. Use filters like age, profession, religion, and location to find the ideal match.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Express Interest</Timeline.Title>
          <Timeline.Time><ImWink className="text-xl my-2 text-pink-500"/></Timeline.Time>
          <Timeline.Body>
          Found someone you like? Express your interest with a simple click. If the feeling is mutual, you can connect directly.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Title>Take the Next Step</Timeline.Title>
          <Timeline.Time><ImRedo2  className="text-xl my-2 text-pink-500"/></Timeline.Time>
          <Timeline.Body>
          Found someone you like? Express your interest with a simple click. If the feeling is mutual, you can connect directly.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
     
    </Timeline>
      </div>
    </div>
  )
}

export default HowItworks
