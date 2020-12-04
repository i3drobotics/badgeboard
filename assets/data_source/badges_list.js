/*
 * Copyright 2019 pystol.org - All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author: Carlos Camacho <carloscamachoucv@gmail.com>
 */

var corssproxy = 'https://cors-anywhere.herokuapp.com/';
var badges = [
	{
		type: 'picture',
		size: { x: 2, y: 1 },
		position: { x: 3, y: 1 },
		src: 'assets/images/logo.png',
		color: 'widget-logo',
	},
	{
		type: 'text',
		size: { x: 2, y: 1 },
		position: { x: 1, y: 1 },
		title: "I3DR Github Status",
		subtitle: 'GitHub repository build status',
		description: '',
		link: 'https://github.com/i3drobotics',
		color: 'widget-text',
	},
	{
		type: 'clock',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 1 },
		color: 'widget-meter',
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 3, y: 3 },
		uri: corssproxy + 'https://github.com/i3drobotics/stereo-vision-toolkit/workflows/QT%20Build/badge.svg?branch=dev&event=push',
		title: "SVTK",
		description: 'Stereo Vision Toolkit',
		link: 'https://github.com/i3drobotics/stereo-vision-toolkit/tree/dev',
		measure: { x: 120, y: 5 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '49,198,83']],
	},
	{
		type: 'text',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 2 },
		title: "ROS",
		subtitle: 'Repositories',
		description: '',
		color: 'widget-text',
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 3 },
		uri: corssproxy + 'https://github.com/i3drobotics/i3dr_stereo_camera-ros/workflows/ROS%20Build/badge.svg?event=push',
		title: "i3dr_stereo_camera",
		description: 'Stereo Camera ROS Package',
		link: 'https://github.com/i3drobotics/i3dr_stereo_camera-ros',
		measure: { x: 120, y: 5 },
		colors: [['status-warning', '212,51,67'], ['status-danger', '197,105,30'], ['status-good', '49,197,83']],
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 4 },
		uri: corssproxy + 'https://github.com/i3drobotics/i3dr_deimos-ros/workflows/ROS%20Build/badge.svg?event=push',
		title: "i3dr_deimos",
		description: 'Deimos ROS Driver',
		link: 'https://github.com/i3drobotics/i3dr_deimos-ros',
		measure: { x: 120, y: 5 },
		colors: [['status-warning', '212,51,67'], ['status-danger', '197,105,30'], ['status-good', '49,197,83']],
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 5, y: 5 },
		uri: corssproxy + 'https://github.com/i3drobotics/i3dr_phobos-ros/workflows/ROS%20Build/badge.svg?event=push',
		title: "i3dr_phobos",
		description: 'Phobos ROS Driver',
		link: 'https://github.com/i3drobotics/i3dr_phobos-ros',
		measure: { x: 120, y: 5 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '48,196,82']],
	},
	{
		type: 'text',
		size: { x: 2, y: 1 },
		position: { x: 1, y: 2 },
		title: "Python",
		subtitle: 'Repositories',
		description: '',
		color: 'widget-text',
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 2, y: 3 },
		uri: corssproxy + 'https://github.com/i3drobotics/pyStereo3D/workflows/Test%20Python%20package/badge.svg?event=push',
		title: "PyStereo3D",
		description: 'Stereo3D python package',
		link: 'https://github.com/i3drobotics/pyStereo3D',
		measure: { x: 175, y: 5 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '49,197,83']],
	},
	{
		type: 'badge',
		size: { x: 1, y: 1 },
		position: { x: 1, y: 3 },
		uri: corssproxy + 'https://github.com/i3drobotics/pyI3DRSGM/workflows/Test%20Python%20package/badge.svg?event=push',
		title: "PyI3DRSGM",
		description: 'I3DRSGM python package',
		link: 'https://github.com/i3drobotics/pyI3DRSGM',
		measure: { x: 175, y: 5 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '49,197,83']],
	},
	{
		type: 'badge',
		size: { x: 2, y: 1 },
		position: { x: 1, y: 4 },
		uri: corssproxy + 'https://github.com/i3drobotics/stereomideval/workflows/Test%20Python%20package/badge.svg?event=push',
		title: "StereoMidEval",
		description: 'StereoMidEval python package',
		link: 'https://github.com/i3drobotics/stereomideval',
		measure: { x: 175, y: 5 },
		colors: [['status-warning', '212,52,67'], ['status-danger', '197,105,30'], ['status-good', '49,197,83']],
	},
];
