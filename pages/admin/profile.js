import React from "react";
import dynamic from "next/dynamic";
import { parseCookies } from "nookies";
import GridItem from "../../component/Grid/GridItem.js";
import GridContainer from "../../component/Grid/GridContainer.js";
import Table from "../../component/Table/Table.js";
import Card from "../../component/cards/Card.js";
import CardHeader from "../../component/cards/CardHeader.js";
import CardBody from "../../component/cards/CardBody.js";
import styles from "../../assets/jss/dashboardStyle";
import router from "next/router";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "next/link";
import { Box, Button, Grid, makeStyles, TextField } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const style = makeStyles((theme) => ({
  editor: {
    marginTop: "2rem",
    padding: "10px",
    border: "1px solid gray",
  },
}));

function Profile({ res2, res4 }) {
  const tableData2 = [];

  const deleteHandler = async (event, id) => {
    event.preventDefault();
    const result = await fetch(
      `http://localhost:3000/api/admin/deleteProduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );
    const result2 = await result.json();
    if (result2) {
      router.reload();
    }
  };

  const [open, setOpen] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const [id, setId] = React.useState("");

  const [name, setName] = React.useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const [price, setPrice] = React.useState();

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const [img1, setImg1] = React.useState("");

  const changeImg1 = (e) => {
    setImg1(e.target.value);
  };

  const [img2, setImg2] = React.useState("");

  const changeImg2 = (e) => {
    setImg2(e.target.value);
  };

  const [description, setDescription] = React.useState("");

  const [stock, setStock] = React.useState("");

  const changeStock = (e) => {
    setStock(e.target.value);
  };

  const [name2, setName2] = React.useState("");

  const changeName2 = (e) => {
    setName2(e.target.value);
  };

  const [price2, setPrice2] = React.useState();

  const changePrice2 = (e) => {
    setPrice2(e.target.value);
  };

  const [img12, setImg12] = React.useState("");

  const changeImg12 = (e) => {
    setImg12(e.target.value);
  };

  const [img22, setImg22] = React.useState("");

  const changeImg22 = (e) => {
    setImg22(e.target.value);
  };

  const [description2, setDescription2] = React.useState("");

  const [stock2, setStock2] = React.useState();

  const changeStock2 = (e) => {
    setStock2(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const createProduct = async (e) => {
    e.preventDefault();
    const result = await fetch(
      `http://localhost:3000/api/admin/createProduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          amount: price,
          img1,
          img2,
          description,
          stock,
        }),
      }
    );
    const result2 = await result.json();
    if (result2) {
      router.reload();
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const result = await fetch(
      `http://localhost:3000/api/admin/updateProduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name: name2,
          amount: price2,
          img1: img12,
          img2: img22,
          description: description2,
          stock: stock2,
        }),
      }
    );
    const result2 = await result.json();
    if (result2) {
      router.reload();
    }
  };

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const visited = {};
  const visited2 = {};

  res2.data.map((data, index) => {
    data.active === true
      ? tableData2.push([
          data.name,
          res4[0].map((data2, index) => {
            if (data2.product == data.id && !visited[data2.product]) {
              visited[data2.product] = 1;
              return data2.unit_amount / 100;
            }
          }),
          <Link key={index} href={`${data.images[0]}`}>
            <button key={index}>Img 1</button>
          </Link>,
          <Link key={index} href={`${data.images[0]}`}>
            <button key={index}>Img 2</button>
          </Link>,
          data.metadata.description,
          data.metadata.stock,
          <>
            <button
              key={index}
              onClick={(event) => {
                setOpen3(true);
                setName2(data.name);
                res4[0].map((data2, index) => {
                  if (data2.product == data.id && !visited2[data2.product]) {
                    visited2[data2.product] = 1;
                    setPrice2(data2.unit_amount / 100);
                  }
                });
                setImg12(data.images[0]);
                setImg22(data.images[1]);
                setStock2(data.metadata.stock);
                setDescription2(data.metadata.description);
                setId(data.id);
              }}
              style={{
                backgroundColor: "green",
                border: "none",
                color: "white",
                padding: "0.4rem",
                borderRadius: "0.5rem",
              }}
            >
              <EditIcon />
            </button>
            <button
              key={index}
              onClick={(event) => {
                deleteHandler(event, data.id);
              }}
              style={{
                backgroundColor: "red",
                border: "none",
                color: "white",
                padding: "0.4rem",
                borderRadius: "0.5rem",
                marginLeft: "1rem",
              }}
            >
              <DeleteIcon />
            </button>
          </>,
        ])
      : null;
  });

  const classes2 = style();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Products</h4>
              <p className={classes.cardCategoryWhite}>List of All Products.</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={[
                  "Name",
                  "Price (AUD)",
                  "Img1",
                  "Img2",
                  "Description",
                  "Stock",
                  "Actions",
                ]}
                tableData={tableData2}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Button
        onClick={(e) => {
          setOpen(true);
        }}
        style={{ margin: "auto", display: "flex" }}
      >
        Add Product +{" "}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
        <DialogContent>
          <>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                value={name}
                onChange={changeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Price (AUD)"
                type="number"
                fullWidth
                value={price}
                onChange={changePrice}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="img1"
                label="Img 1 (URL)"
                type="text"
                fullWidth
                value={img1}
                onChange={changeImg1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="img2"
                label="Img 2 (URL)"
                type="text"
                fullWidth
                value={img2}
                onChange={changeImg2}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Stock</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stock}
                label="Stock"
                fullWidth
                onChange={changeStock}
              >
                <MenuItem value="In stock">In stock</MenuItem>
                <MenuItem value="Out of stock">Out of stock</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes2.editor}>
                <p style={{ textAlign: "left" }}>Description (Max length : 400)</p>
                <QuillNoSSRWrapper
                  value={description}
                  onChange={setDescription}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                />
              </Box>
            </Grid>
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              createProduct(e);
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
        <DialogContent>
          <>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                value={name2}
                onChange={changeName2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Price (AUD)"
                type="number"
                fullWidth
                value={price2}
                onChange={changePrice2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="img1"
                label="Img 1 (URL)"
                type="text"
                fullWidth
                value={img12}
                onChange={changeImg12}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="img2"
                label="Img 2 (URL)"
                type="text"
                fullWidth
                value={img22}
                onChange={changeImg22}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Stock</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stock2}
                label="Stock"
                fullWidth
                onChange={changeStock2}
              >
                <MenuItem value="In stock">In stock</MenuItem>
                <MenuItem value="Out of stock">Out of stock</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes2.editor}>
                <p style={{ textAlign: "left" }}>Description (Max length : 400)</p>
                <QuillNoSSRWrapper
                  value={description2}
                  onChange={setDescription2}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                />
              </Box>
            </Grid>
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              updateUser(e);
            }}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Profile;

export async function getServerSideProps(ctx) {
  const { adminEmail, email } = parseCookies(ctx);

  if (!adminEmail) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin/signin",
      },
    };
  } else {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    const products = await stripe.products.list({});
    // const res2 = await res1.json();
    const res2 = products;

    const res4 = [];
    const price = await stripe.prices.list({});
    res4.push(price.data);

    return {
      props: { res2, res4 },
    };
  }
}
