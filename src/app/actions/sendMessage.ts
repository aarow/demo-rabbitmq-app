"use server";

import * as amqp from "amqplib";
import { Buffer } from "node:buffer";

const rabbitmqUrl: string = process.env.RABBITMQ_URL as string;
const exchangeName = "mq-test-exchange";
const queue = "";

async function connect(url: string) {
  if (!url) {
    throw new Error("RabbitMQ URL not found");
  }
  const connection = await amqp.connect(url);
  const channel = await connection.createChannel();
  return channel;
}

export default async function sendMessage(formData: FormData) {
  const message = Object.fromEntries(formData.entries());
  console.log("notifying");

  const channel = await connect(rabbitmqUrl);

  console.log("connected");
  // await channel.assertQueue(queue);
  await channel.assertExchange(exchangeName, "fanout", { durable: false });
  console.log("asserted");
  // channel.sendToQueue('mq-test-queue', Buffer.from(JSON.stringify(message)), { persistent: true });
  channel.publish(exchangeName, queue, Buffer.from(JSON.stringify(message)));
  console.log("sent");

  await channel.close();
}
