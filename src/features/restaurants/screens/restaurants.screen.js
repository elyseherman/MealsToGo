import { FlatList } from 'react-native';
import React, { useContext } from 'react';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator } from 'react-native-paper';
import { Search } from '../components/search.component';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

const Loading = styled(ActivityIndicator)`
margin-left: -25px;`;

const LoadingContainer = styled.View`
position: absolute;
top: '50%';
left: '50%';
`;

export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        animating={true}
                        color={'purple'}
                        size={50}
                    />
                </LoadingContainer>
            )}
            <Search />
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <Spacer position='bottom' size='large'>
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    )
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }} />
        </SafeArea>
    )
};