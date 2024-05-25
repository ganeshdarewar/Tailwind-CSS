import React from 'react'

const SnapScroll = () => {
  return (
		<div class="flex space-x-5 snap-x overflow-x-auto">
			<div class=" snap-center w-[80%] [box-shadow:0_0_50px_black] flex-shrink-0 h-48 bg-gray-800"></div>
			<div class="snap-center w-80 flex-shrink-0 h-48 bg-orange-800"></div>
			<div class="snap-center w-80 flex-shrink-0 h-48 bg-pink-800"></div>
			<div class="snap-center w-80 flex-shrink-0 h-48 bg-purple-800"></div>
			<div class="snap-center w-80 flex-shrink-0 h-48 bg-blue-800"></div>
		</div>
  )
}

export default SnapScroll
