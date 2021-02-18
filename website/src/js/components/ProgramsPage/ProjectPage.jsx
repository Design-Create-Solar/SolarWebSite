import React, { useContext } from 'react';
import { styled } from '@material-ui/styles';
import InfoArea from '../MultiplePages/InfoArea';
import { BlocksContext } from "../../../context/BlocksContext"

function ProjectPage() {
	const { blocks } = useContext(BlocksContext)
	const programs = blocks.filter((block) => block.page === "PROGRAMS")
	return (
		<Container>
			<InfoContainer order={2}>
				{programs.map((info, idx) => {
					return (
						<InfoArea
							key={idx}
							header={info.header}
							color={info.color}
							text={info.text}
							align={info.align}
							images={info.images}
						/>
					);
				})}
			</InfoContainer>
		</Container>
	);
}

const Container = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	overflow: 'none'
});

const InfoContainer = styled('div')({
	order: 1,
	flex: 1
});

export default ProjectPage