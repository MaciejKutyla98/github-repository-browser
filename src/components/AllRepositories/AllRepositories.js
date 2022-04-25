import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Pagination } from "@material-ui/lab";
import usePagination from "../../utils/Pagination";
import { useQuery } from "@apollo/client";
import { REPOSITORIES_NAME } from "../../graphql/queries/repositoriesName";
import { RepositoryListCard } from "../RepositoriesListCard/RepositoryListCard";
import CircularProgress from "@mui/material/CircularProgress";

export const AllRepositories = () => {
    let [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(REPOSITORIES_NAME);
    const PER_PAGE = 4;
    const count = data
        ? Math.ceil(data.viewer.repositories.totalCount / PER_PAGE)
        : 0;
    const _DATA = usePagination(data?.viewer?.repositories?.nodes, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return loading ? (
        <Box
            display="flex"
            width="100vw"
            height={80}
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    ) : (
        <Box p="5">
            {_DATA.currentData().map((v) => {
                return <RepositoryListCard key={v.id} repositoryName={v.name} />;
            })}
            <Box
                display="flex"
                width="100vw"
                height={80}
                alignItems="center"
                justifyContent="center"
            >
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                    sx={{ margin: 0 }}
                />
            </Box>
        </Box>
    );
};
