import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { useStyletron } from 'styletron-react';
import { Card, StyledBody } from 'baseui/card';
import Data from './data.json';
import { Heading, HeadingLevel } from 'baseui/heading';
import { ParagraphSmall } from 'baseui/typography';
import { Input } from 'baseui/input';
import ArrowRight from 'baseui/icon/arrow-right';
import Search from 'baseui/icon/search';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';

export default function Example() {
  const [css] = useStyletron();
  const [search, setSearch] = React.useState('');
  const [info, setInfo] = React.useState(Data);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <HeaderNavigation
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (max-width:600px)': {
            flexDirection: 'column',
            padding: '10px',
          },
        })}
      >
        <StyledNavigationList $align={ALIGN.center}>
          <StyledNavigationItem
            className={css({
              fontWeight: 'bold',
              fontSize: '25px',
              padding: '10px',
            })}
          >
            SEARCH
          </StyledNavigationItem>
        </StyledNavigationList>

        <StyledNavigationList $align={ALIGN.center}>
          <StyledNavigationItem>
            <Input
              placeholder="search..."
              value={search}
              onChange={handleChange}
              startEnhancer={<Search size={24} />}
            />
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>

      <div
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          margin: '5% 15%',
          '@media (max-width:600px)': {
            margin: '5% 10%',
          },
        })}
      >
        {Data.filter((item) => {
          if (item === search) {
            return item;
          } else if (
            item.first_name.toLowerCase().includes(search.toLowerCase()) ||
            item.last_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return item;
          }
        }).map((items, index) => (
          <Card
            key={index}
            overrides={{
              Root: {
                style: {
                  width: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: '20px',
                  padding: '10px',
                },
              },
            }}
            headerImage={items.avatar}
          >
            <StyledBody
              className={css({
                lineHeight: '5px',
              })}
            >
              <HeadingLevel>
                <Heading styleLevel={6}>UserID: {items.id}</Heading>
                <ParagraphSmall>
                  Name: {items.first_name} {items.last_name}
                </ParagraphSmall>
                <ParagraphSmall>Email: {items.email}</ParagraphSmall>
              </HeadingLevel>
              <Button
                overrides={{
                  BaseButton: {
                    style: {
                      fontSize: '12px',
                      padding: '5px',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginTop: '20px',
                      paddingBottom: '0px',
                      ':hover': {
                        background: 'none',
                      },
                      ':active': {
                        background: 'none',
                      },
                    },
                  },
                }}
                endEnhancer={<ArrowRight size={20} />}
                $as="a"
                kind={KIND.tertiary}
              >
                see profile
              </Button>
            </StyledBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
