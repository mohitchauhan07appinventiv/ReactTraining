import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import { Edit, DeleteForever} from "@material-ui/icons";
import useStyle from "./style";
import Loader from './Loader';

const DisplayTable = ({data,columns, handleEdit, handleDelete}) => {
    const classes=useStyle();
    const [isLoading, setIsLoading]=useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false);
      },1000)
    },[])

    useEffect(()=>{
      return setIsLoading(true)
    },[])
    
  return (
    <div className={classes.cardContainer}>
      <Paper className={classes.tablePaper}>
        {isLoading ?
        (<Loader/>)
        :(
          <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    //   key={column.id}
                    key={index}
                    align={column.align}
                    className={classes.title}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                return (
                  <TableRow hover role="checkbox" key={row.code}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      if (value === undefined) {
                        return (
                          <TableCell>
                            {
                              <>
                                <IconButton
                                  data={row}
                                  onClick={() => handleEdit(row)}
                                >
                                  <Edit />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(row)}>
                                  <DeleteForever />
                                </IconButton>
                              </>
                            }
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell
                          // key={column.id}
                          key={index}
                          className={classes.para}
                          align={column.align}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        )}
      </Paper>
    </div>
  );
};

export default DisplayTable;
