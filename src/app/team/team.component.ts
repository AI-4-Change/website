import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/models/teamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less'],
})
export class TeamComponent implements OnInit {
  public team: [TeamMember] = [
    {
      name: 'Laksh Bhambhani',
      position: 'Chief Executuve Officer',
      team: 'Executive',
      description: `Laksh Bhambhani is currently a junior at Homestead High
      School. He loves building robots from scratch and adding AI
      applications for them. Apart from coding, he loves to spend
      time at his Robotics club, with his friends and playing
      instruments. He also leads Elementary school Robotics and
      soccer teams.`,
      socials: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
