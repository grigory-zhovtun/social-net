import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: space-between;
  width: 747px;
  height: 53px;
  background: #DAF247;
  border: 1px solid #000000;
  border-radius: 10px;
  align-items: center;  
`
const Ava = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 20px;
  border-radius: 100%;
  border: 1px solid green;
`
const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000000;
`

export const PostItem = () => {
    return (
        <Wrapper>
            <div>
                <Ava src={'https://thumbs.dreamstime.com/b/schoolboy-4231312.jpg'} alt={'ava'}/>
            </div>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt molestiae nihil quae ratione vitae voluptatibus. Corporis debitis dolorum excepturi id, impedit modi quam quia rem totam unde? Adipisci, impedit.</Text>
        </Wrapper>
    )
}